<?php

namespace App\Enums;

enum MessageType: string
{
    case CREATED = 'Berhasil ditambahkan';
    case UPDATED = 'Berhasil diupdate';
    case DELETED = 'Berhasil dihapus';
    case ERROR = 'Terjadi kesalahan. Silahkan coba lagi nanti';

    public function message(string $entity = '', ?string $error = null)
    {
        if ($this === MessageType::ERROR && $error) {
            return "{$this->value} {$error}";
        }

        return "{$this->value} {$entity}";
    }
}