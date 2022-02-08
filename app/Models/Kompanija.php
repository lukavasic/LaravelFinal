<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kompanija extends Model
{
    //use HasFactory;
    protected $table = "kompanija";
    public $timestamps = false;

    public function automobili()
    {
        return $this->hasMany(Automobil::class);
    }
}
