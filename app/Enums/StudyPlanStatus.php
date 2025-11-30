<?php

namespace App\Enums;

enum StudyPlanStatus: string
{
    case PENDING = 'Pending';
    case APPROVED = 'Disetujui';
    case REJECTED = 'Ditolak';

    public static function option()
    {
        return collect(self::cases())->map(fn($item) => [
            'value' => $item->name,
            'label' => $item->value,
        ])->values()->toArray();
    }
}