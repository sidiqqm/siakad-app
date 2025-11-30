<?php

namespace App\Enums;

enum FeeStatus: string
{
    case PENDING = 'Pending';
    case SUCCESS = 'Sukses';
    case FAILED = 'Gagal';

    public static function option()
    {
        return collect(self::cases())->map(fn($item) => [
            'value' => $item->name,
            'label' => $item->value,
        ])->values()->toArray();
    }
}