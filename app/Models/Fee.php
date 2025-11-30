<?php

namespace App\Models;

use App\Enums\FeeStatus;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fee extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_id',
        'fee_group_id',
        'academic_year_id',
        'fee_code',
        'semester',
        'status',
    ];

    protected function casts()
    {
        return [
            'status' => FeeStatus::class
        ];
    }

    protected function feeCode()
    {
        return Attribute::make([
            'get' => fn($value) => strtoupper($value),
            'set' => fn($value) => strtolower($value)
        ]);
    }

    public function student()
    {
        return $this->belongsTo(Student::class);
    }

    public function feeGroup()
    {
        return $this->belongsTo(FeeGroup::class);
    }

    public function academicYear()
    {
        return $this->belongsTo(AcademicYear::class);
    }

}
