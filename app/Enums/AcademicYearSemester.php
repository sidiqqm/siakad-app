<?php

namespace App\Enums;

enum AcademicYearSemester: string
{
    case ODD = 'Ganjil';
    case EVEN = 'Genap';

    public static function option()
    {
        // collect tujuannya untuk ubah enum jadi collection supaya bisa dimanipulasi dengan mudah contohnya mapping
        // -> values = untuk mengurutkan indeks
        // -> toArray = mengembalikan array
        // ubah ke collection -> mapping -> dibenerin index nya -> dibentuk menjadi array
        return collect(self::cases())
            ->map(fn($item) => [
                'value' => $item->name,
                'label' => $item->value,
            ])->values()->toArray();
    }
}