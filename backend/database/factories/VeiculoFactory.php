<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Veiculo;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Veiculo>
 */
class VeiculoFactory extends Factory
{
    /**
     * Define the model's default state
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name'=> $this->faker->word(), 
            'image'=> 'https://picsum.photos/'.rand(150, 300), 
            'mark'=> $this->faker->company(), 
            'year'=> $this->faker->year(),
            'storage'=> $this->faker->numberBetween(1, 100), 
            'price'=> $this->faker->randomFloat(2, 10000, 100000), 
            'category_id'=> \App\Models\Category::factory(), 
            
        ];
    }
}
