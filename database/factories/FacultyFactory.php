<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class FacultyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faculties = [
            'Fakultas Teknik',
            'Fakultas Kedokteran',
            'Fakultas Hukum',
            'Fakultas Ekonomi dan Bisnis',
            'Fakultas Ilmu Sosial dan Ilmu Politik',
            'Fakultas Ilmu Budaya',
            'Fakultas Matematika dan Ilmu Pengetahuan Alam',
            'Fakultas Ilmu Komputer',
            'Fakultas Pertanian',
            'Fakultas Keguruan dan Ilmu Pendidikan'
        ];

        return [
            'name' => $name = $this->faker->unique()->randomElement($faculties),
            'slug' => str()->slug($name),
            'code' => strtoupper(str()->random(6))
        ];
    }

    public function configure()
    {
        return $this->afterCreating(function ($faculty) {
            $departmentsByFaculty = [
                'Fakultas Teknik' => [
                    'Teknik Sipil',
                    'Teknik Mesin',
                    'Teknik Elektro',
                    'Teknik Kimia',
                    'Teknik Industri'
                ],
                'Fakultas Kedokteran' => [
                    'Pendidikan Dokter',
                    'Ilmu Keperawatan',
                    'Kebidanan',
                    'Farmasi'
                ],
                'Fakultas Hukum' => [
                    'Ilmu Hukum'
                ],
                'Fakultas Ekonomi dan Bisnis' => [
                    'Manajemen',
                    'Akuntansi',
                    'Ekonomi Pembangunan'
                ],
                'Fakultas Ilmu Sosial dan Ilmu Politik' => [
                    'Ilmu Komunikasi',
                    'Ilmu Administrasi Negara',
                    'Ilmu Pemerintahan',
                    'Sosiologi'
                ],
                'Fakultas Ilmu Budaya' => [
                    'Sastra Indonesia',
                    'Sastra Inggris',
                    'Sastra Jepang',
                    'Ilmu Sejarah'
                ],
                'Fakultas Matematika dan Ilmu Pengetahuan Alam' => [
                    'Matematika',
                    'Fisika',
                    'Kimia',
                    'Biologi'
                ],
                'Fakultas Ilmu Komputer' => [
                    'Informatika',
                    'Sistem Informasi',
                    'Teknologi Informasi'
                ],
                'Fakultas Pertanian' => [
                    'Agronomi',
                    'Agroteknologi',
                    'Ilmu Tanah',
                    'Agribisnis'
                ],
                'Fakultas Keguruan dan Ilmu Pendidikan' => [
                    'Pendidikan Bahasa Indonesia',
                    'Pendidikan Bahasa Inggris',
                    'Pendidikan Matematika',
                    'Pendidikan Fisika'
                ]
            ];

            $selectedDepartments = $departmentsByFaculty[$faculty->name] ?? [];

            $departmentData = array_map(function ($deptName) {
                return [
                    'name' => $deptName,
                    'slug' => str()->slug($deptName),
                    'code' => strtoupper(str()->random(6))
                ];
            }, $selectedDepartments);

            if (!empty($departmentData)) {
                $faculty->departments()->createMany($departmentData);
            }
        });
    }
}
