<?php

namespace App\Http\Controllers;


class HomepageController extends Controller
{
    public function kompanijeStranica()
    {
        return view('kompanije');
    }
}
