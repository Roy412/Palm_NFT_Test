import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, CircularProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useAppSelector } from 'app/hooks';
import {
  InputField,
  RadioGroupField,
  SelectField,
} from 'components/FormFields';
import { selectCityOption } from 'features/city/citySlice';
import { Student } from 'models';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

interface StudentFormProps {
  initialValues?: Student;
  onSubmit?: (formValues: Student) => void;
}

function StudentForm({ initialValues, onSubmit }: StudentFormProps) {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required('Please enter name.')
      .test('two-words', 'Please enter at least two words', (value) => (!value ? true : value?.split(' ').filter((x) => !!x).length > 2)),
    age: yup
      .number()
      .positive('Please enter a positive number.')
      .min(18, 'Min is 18')
      .max(60, 'Max is 60')
      .integer('Please enter an integer.')
      .required('Please enter age.')
      .typeError('Please enter a valid number.'),
    mark: yup
      .number()
      .min(0, 'Min is 0.')
      .max(10, 'Max is 10.')
      .required('Please enter mark.')
      .typeError('Please enter a valid number.'),
    gender: yup
      .string()
      .oneOf(['male', 'female', 'Please select either male or female.'])
      .required('Please select gender.'),
    city: yup.string().required('Please select city.'),
  });

  const cityOptions = useAppSelector(selectCityOption);
  const [error, setError] = useState('');

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Student>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (formValues: Student) => {
    try {
      // Clear previous submission error
      setError('');

      await onSubmit?.(formValues);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <Box maxWidth={400}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        {/* FORM FIELDS */}
        <InputField name="name" control={control} label="Full Name" />

        <RadioGroupField
          name="gender"
          control={control}
          label="Gender"
          options={[
            {
              label: 'Male',
              value: 'male',
            },
            {
              label: 'Female',
              value: 'female',
            },
          ]}
        />

        <InputField name="age" control={control} label="Age" type="number" />
        <InputField name="mark" control={control} label="Mark" type="number" />

        {Array.isArray(cityOptions) && !!cityOptions.length && (
          <SelectField
            name="city"
            control={control}
            label="City"
            options={cityOptions}
          />
        )}

        {error && <Alert severity="error">{error}</Alert>}

        <Box mt={3}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            {isSubmitting && <CircularProgress size={16} color="secondary" />}
            {' '}
            &nbsp;Save
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default StudentForm;
