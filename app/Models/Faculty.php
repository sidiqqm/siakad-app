<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Query\Builder;

class Faculty extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'code',
        'logo',
        'slug'
    ];

    protected function code(): Attribute
    {
        return Attribute::make(
            get: fn($value) => strtoupper($value),
            set: fn($value) => strtolower($value),
        );
    }

    public function classrooms()
    {
        return $this->hasMany(Classroom::class);
    }

    public function courses()
    {
        return $this->hasMany(Course::class);
    }

    public function departments()
    {
        return $this->hasMany(Department::class);
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

    public function scopeFilter(Builder $query, array $filter)
    {
        $query->when($filter['search'] ?? null, function ($query, $search) {
            $query->whereAny([
                'name',
                'code',
            ], 'REGEXP', $search);
        });
    }

    public function scopeSorting(Builder $query, array $sorts)
    {
        $query->when($sorts['field'] ?? null && $sorts['direction'] ?? null, function ($query) use ($sorts) {
            $query->orderBy($sorts['field'], $sorts['direction']);
        });
    }
}
