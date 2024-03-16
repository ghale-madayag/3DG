<?php

namespace Database\Seeders;

use App\Models\Contact;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        // Generate fake data for contacts
        for ($i = 0; $i < 30; $i++) { // Change 10 to the number of contacts you want to create
            Contact::create([
                'fname' => $faker->firstName,
                'lname' => $faker->lastName,
                'phone' => '63' . $faker->numberBetween(1000000000, 9999999999), // Generating 10 random digits
                'email' => $faker->email,
                'address' => $faker->address,
                'other_details' => $faker->text,
            ]);
        }
    }
}
