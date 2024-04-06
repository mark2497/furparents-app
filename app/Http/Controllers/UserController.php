<?php

namespace App\Http\Controllers;

use App\Http\Requests\NewBreedRequest;
use App\Models\PreferredBreed;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class UserController extends Controller
{
    public function getPreferredBreed(Request $request) {
        return response()->json($request->user()->preferredBreed()->get());
    }

    public function setPreferredBreed(NewBreedRequest $request) {
        DB::beginTransaction();
        try {
            $user_id = Auth::user()->id;
            PreferredBreed::where('user_id', $user_id)->delete();
            foreach($request->get('payload') as $index => $breedName) {
                $selected = new PreferredBreed();
                $selected->user_id = $user_id;
                $selected->breed = $breedName;
                $selected->save();
            }
            DB::commit();
            return Inertia::render('DogsGallery', [
                'status' => 'Preferred breed updated!',
            ]);
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }
        
    }
}
