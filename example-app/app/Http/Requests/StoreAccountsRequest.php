<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAccountsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'fullName' => 'required',
            'email' => 'required|unique:accounts',
            'role' => 'required|in:Author,Editor,Subscriber, Administrator'
        ];
    }

    public function messages()
    {
        return [
            'fullName.required' => 'Full name is required',
            'email.required' => 'Email is required',
            'email.unique' => 'Email is already existing',
            'role.required' => 'Roles are required',
            'role.in' => 'Roles can be Author, Editor, Subscriber, Administrator only'
        ];
    }
}
