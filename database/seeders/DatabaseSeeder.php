<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            FacultySeeder::class,
        ]);

        $this->call(FeeGroupSeeder::class);

        // Admin
        User::factory()->create([
            'name' => 'Sidiq',
            'email' => 'sidiq@gmail.com',
            'password' => 'password'
        ])->assignRole(Role::create([
                        'name' => 'Admin'
                    ]));

        // Operator
        $operator = User::factory()->create([
            'name' => 'Ahmad Haha',
            'email' => 'ahmad@gmail.com'
        ])->assignRole(Role::create([
                        'name' => 'Operator'
                    ]));

        $operator->operator()->create([
            'faculty_id' => 1,
            'department_id' => 1,
            'employee_number' => str()->padLeft(mt_rand(0, 999999), 6)
        ]);

        // Teacher
        $teacher = User::factory()->create([
            'name' => 'Ryan Ananda',
            'email' => 'ryan@gmail.com'
        ])->assignRole(Role::create([
                        'name' => 'Teacher'
                    ]));

        $teacher->teacher()->create([
            'faculty_id' => 1,
            'department_id' => 1,
            'teacher_number' => str()->padLeft(mt_rand(0, 999999), 6),
            'academic_title' => 'Asisten Ahli',
        ]);

        // Student
        $student = User::factory()->create([
            'name' => 'Nopri Haha',
            'email' => 'nopri@gmail.com'
        ])->assignRole(Role::create([
                        'name' => 'Student'
                    ]));

        $student->student()->create([
            'faculty_id' => 1,
            'department_id' => 1,
            'fee_group_id' => rand(1, 6),
            'student_number' => str()->padLeft(mt_rand(0, 999999), 6),
            'semester' => 1,
            'batch' => 2025
        ]);

    }
}
