import React, { useState } from 'react'
import { TextField, SelectField, SubmitButton } from './Fields';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const requiredString = (message: string) => {
  return z.string({ required_error: message }).trim().min(1, { message })
}

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const formSchema = z.object({
  fullName: requiredString('Full name is required'),
  email: requiredString('Email address is required').regex(emailRegex, 'Email address is invalid'),
  role: requiredString('Role is required')
})

type TCallback = {
  cb?: () => void;
}

export function CreateForm({ cb }: TCallback) {

  const { control, handleSubmit } = useForm({
    mode: 'all',
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      role: ''
    }
  })

  const submitAPI = async (payload: any) => {
    try {
      await axios.post('http://localhost/api/accounts', payload, { headers: {} });
      cb?.();
    } catch (error) {
      console.log(error);
      alert('Network error');
    }
  }

  const onSubmit = handleSubmit(data => {
    console.log('data', data);
    submitAPI(data);
  })

  return (
    <div className='flex flex-row justify-center'>
      <div className='w-[500px] bg-slate-200 border rounded-xl'>
        <form className='p-10' onSubmit={onSubmit}>
          <TextField control={control} name='fullName' label='Full Name' placeholder='Enter your full name'/>
          <TextField control={control} name='email' label='Email Address' type='email' placeholder='Enter your email address' />
          <SelectField control={control} name='role' label='Role' placeholder='Enter your Role' />
          <SubmitButton label='Submit' onClick={onSubmit} />
        </form>
      </div>
    </div>
  );
}
  