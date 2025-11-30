<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FeeGroup extends Model
{
    use HasFactory;

    protected $fillable = [
        'group',
        'amount',
    ];

    // hasmany
    public function fees() {
        return $this->hasMany(Fee::class);
    }
    public function students()
    {
        return $this->hasMany(Student::class);
    }
    
}
