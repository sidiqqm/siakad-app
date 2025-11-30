<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    use HasFactory;

    protected $fillable = [
        'faculty_id',
        'name',
        'code',
        'slug'
    ];

    // Nama method harus sama dengan nama kolom/field di database cth:code()
    // Saat mengakses atau menyimpan field/kolom code aturan methode ini yang digunakan
    // Attribute -> untuk accessor dan mutator (get dan set)
    protected function code()
    {
        return Attribute::make(
            get: fn($value) => strtoupper($value),
            set: fn($value) => strtolower($value),
        );
    }

    public function faculty()
    {
        return $this->belongsTo(Faculty::class);
    }

    public function classrooms()
    {
        return $this->hasMany(Classroom::class);
    }

    public function courses()
    {
        return $this->hasMany(Course::class);
    }
    public function operators()
    {
        return $this->hasMany(Operator::class);
    }
    public function schedules()
    {
        return $this->hasMany(Schedule::class);
    }
    public function students()
    {
        return $this->hasMany(Student::class);
    }
    public function teachers()
    {
        return $this->hasMany(Teacher::class);
    }
}
