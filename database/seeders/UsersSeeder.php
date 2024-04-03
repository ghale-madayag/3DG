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
        $users = [
            ['name' => 'Abegail', 
                'email' => 'ghale.madayag@gmail.com', 
                'password' => Hash::make('u2tH9eRsg$!!wc2'), 
                'fname' => 'Abegail', 
                'lname' => 'Madayag', 
                'phone' => '639190982923'
            ],
            ['name' => 'NJ Carreon', 
                'email' => 'Drrealtydevelopment@gmail.com', 
                'password' => '$2y$10$zmscX2aR6RQUvauO27ZD.u0u.VXwZ840lSZWMZ7UOB6SQK1uzSbsO', 
                'fname' => 'NJ', 
                'lname' => 'Carreon', 
                'phone' => '639812751740'
            ],
        ];

        foreach ($users as $user) {
            $us = User::create($user);
            $us->assignRole('administrator');
        }
        
        

    }
}
