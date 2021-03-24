<?php

namespace Database\Seeder;
use Illuminate\Database\Seeder;

use App\User;
use Illuminate\Support\Facades\Hash;

class TodosSeeder extends Seeder 
{
/**
* Run the database seeds.
* 
* @return void
*/
public function run()
{
    $useradmin=User::create([
        'name' => 'admin benita',
        'email' => 'benita@gmail.com',
        'password' => Hash::make('admin'),
        'fullacces' => 'yes',
        'codigo' => 'adm1',
        ]);
    $user1=User::create([
        'name' => 'usuario Camila',
        'email' => 'camila@gmail.com',
        'password' => Hash::make('camila'),
        'fullacces' => 'no',
        'codigo' => 'casa1',
        ]);

}
}