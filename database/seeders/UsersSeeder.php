<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user =  User::create([
            'name' => 'Abegail',
            'email' => 'ghale.madayag@gmail.com',
            'password' => Hash::make('u2tH9eRsg$!!wc2'),
            'fname' => 'Abegail',
            'lname' => 'Madayag',
            'phone' => '639190982923',
        ]);
        
        $user->assignRole('administrator');

    }
}
