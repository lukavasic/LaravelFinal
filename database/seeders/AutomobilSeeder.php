<?php

namespace Database\Seeders;

use App\Models\Kompanija;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class AutomobilSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 40; $i++) {
            $kompanija_id = rand(1, 7);
            DB::table('automobil')->insert([
                'model' => Str::random(5),
                'potrosnja' => rand(3, 13) . 'l',
                'snaga' => rand(80, 200) . "kW",
                'kompanija_id' => $kompanija_id
            ]);
            Kompanija::find($kompanija_id)->increment('broj_automobila', 1);
        }
    }
}
