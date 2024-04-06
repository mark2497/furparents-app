<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

class DogsController extends Controller
{
    public function index() {
        return Cache::remember('all-breeds', 1440, function() {
            $response = Http::get('https://dog.ceo/api/breeds/list/all');
            return $response->json();
        });
    }

    public function image($breed) {
        return Cache::remember($breed."-image", 1440, function() use ( $breed ) {
            $response = Http::get("https://dog.ceo/api/breed/".$breed."/images");
            $responseBody = $response->body();
            $data = json_decode($responseBody, true);
            $data = $response->json();
            if (!empty($data['message'])) {
                $firstImage = $data['message'][0];
                return $firstImage;
            }
            return null;
        });
    }
}
