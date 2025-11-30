<?php

namespace App\Models;

use App\Enums\AcademicYearSemester;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AcademicYear extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'start_date',
        'end_date',
        'semester',
        'is_active'
    ];

    // casts -> otomatis merubah isi field jadi enum yang ditentukan
    protected function casts()
    {
        return [
            'semester' => AcademicYearSemester::class
        ];
    }

    public function classrooms()
    {
        return $this->hasMany(Classroom::class);
    }

    public function courses()
    {
        return $this->hasMany(Course::class);
    }

    public function fees()
    {
        return $this->hasMany(Fee::class);
    }
    public function schedules()
    {
        return $this->hasMany(Schedule::class);
    }
    public function studyPlans()
    {
        return $this->hasMany(StudyPlan::class);
    }
    public function studyResults()
    {
        return $this->hasMany(StudyResult::class);
    }
}
