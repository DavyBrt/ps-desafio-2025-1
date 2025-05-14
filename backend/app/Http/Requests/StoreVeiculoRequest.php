<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreVeiculoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'min:1', 'max:80'],
            'image' => ['file', 'mimes:jpg, jpeg, png, jfif'],
            'mark' => ['required', 'min:1', 'max:80'],
            'year' => ['required', 'integer'],
            'storage' =>  ['required', 'integer'],
            'price' => ['required', 'integer'],
            'category_id' => ['required']

        ];
    }
}
