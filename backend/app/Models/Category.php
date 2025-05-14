<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Throwable;

class Category extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'name'
    ];

    public function vehicles() {
        return $this->hasMany(Veiculo::class, 'category_id', 'id');
    }

    protected static function booted()
    {
        self::deleting(function (Category $category) {
            $category->vehicles()->each(function(Veiculo $veiculo){
                $veiculo->delete();
            });
        });
    }
}
