<?php

namespace Database\Seeders;

use App\Models\FeeGroup;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FeeGroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $feeGroups = [
            ['group' => 1, 'amount' => 500000],
            ['group' => 2, 'amount' => 1000000],
            ['group' => 3, 'amount' => 2000000],
            ['group' => 4, 'amount' => 3500000],
            ['group' => 5, 'amount' => 5000000],
            ['group' => 6, 'amount' => 7500000],
            ['group' => 7, 'amount' => 10000000],
            ['group' => 8, 'amount' => 15000000],
        ];

        foreach($feeGroups as $feeGroup) {
            FeeGroup::create($feeGroup);
        }
    }
}
