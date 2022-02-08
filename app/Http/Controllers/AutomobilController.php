<?php

namespace App\Http\Controllers;

use App\Models\Automobil;

use App\Models\Kompanija;
use Illuminate\Http\Request;

class AutomobilController extends Controller
{
    public function ucitavanje()
    {
        $automobili = Automobil::all();

        return response()->json([
            'automobili' => $automobili
        ]);
    }

    public function izmena(Request $request)
    {
        $id = $request->input('id');
        $snaga = $request->input('snaga');
        Automobil::where('id', $id)->update(['snaga' => $snaga]);
        return response()->json([
            'message' => true,
        ]);
    }

    public function dodavanje(Request $request)
    {
        $model = $request->input('model');
        $snaga = $request->input('snaga');
        $potrosnja = $request->input('potrosnja');
        $kompanija_id = $request->input('kompanija_id');

        Automobil::insert([
            'snaga' => $snaga,
            'model' => $model,
            'potrosnja' => $potrosnja,
            'kompanija_id' => $kompanija_id
        ]);
        Kompanija::find($kompanija_id)->increment('broj_automobila', 1);
        return response()->json([
            'message' => true,
        ]);
    }

    public function brisanje(Request $request)
    {
        $id = $request->input('id');
        $kompanija_id = Automobil::find($id)->kompanija()->get()[0]->id;
        Kompanija::find($kompanija_id)->decrement('broj_automobila', 1);
        Automobil::find($id)->delete();

        return response()->json([
            'message' => true,
        ]);
    }
}
