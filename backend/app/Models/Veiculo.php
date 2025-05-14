<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage;
use Throwable;

class Veiculo extends Model
{
    use HasFactory, HasUuids;
    
    
    protected $fillable = [
        'name',
        'image',
        'mark',
        'year',
        'storage',
        'price',
        'category_id'
    ];

    public function category() {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    protected static function booted()
    {
        self::deleted(function (Veiculo $veiculo) {

            try {
                $image_name = explode('image/', $veiculo['image']);
                Storage::disk('public')->delete('image/'.$image_name[1]);
            } catch (Throwable){

            }
        });
    }
}
