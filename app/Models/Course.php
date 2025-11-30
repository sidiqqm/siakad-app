<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'faculty_id',
        'department_id',
        'teacher_id',
        'academic_year_id',
        'name',
        'code',
        'credit',
        'semester',
    ];

    protected function code()
    {
        return Attribute::make(
            get: fn($value) => strtoupper($value),
            set: fn($value) => strtolower($value)
        );
    }

    public function faculty()
    {
        return $this->belongsTo(Faculty::class);
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function academicYear()
    {
        return $this->belongsTo(AcademicYear::class);
    }

    public function teacher()
    {
        return $this->belongsTo(Teacher::class);
    }

    // hasMany
    public function attendances()
    {
        return $this->hasMany(Attendance::class);
    }
    public function grades()
    {
        return $this->hasMany(Grade::class);
    }
    public function schedules()
    {
        return $this->hasMany(Schedule::class);
    }
    public function studyResultGrades()
    {
        return $this->hasMany(StudyResultGrade::class);
    }
}
