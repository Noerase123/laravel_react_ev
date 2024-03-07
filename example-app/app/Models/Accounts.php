<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Accounts extends Model
{
    use HasFactory;

    protected $table = 'accounts';

    public $primaryKey = 'id';

    protected $fillable = [
        'email',
        'fullName',
        'role'
    ];
}
