<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Automobil extends Model
{
    //use HasFactory;
    protected $table = "automobil";
    public $timestamps = false;

    public function kompanija()
    {
        return $this->belongsTo(Kompanija::class);
    }
}
