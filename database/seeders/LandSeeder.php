<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\LandDevelopment;
use App\Models\Contact;
use Faker\Factory as Faker;

class LandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        // Get all contacts (sellers and owners)
        $contacts = Contact::all();

        // Generate fake data for 10 lands
        for ($i = 0; $i < 10; $i++) {
            // Randomly select a seller and owner from contacts
            $seller = $contacts->random();
            $owner = $contacts->random();

            LandDevelopment::create([
                'name' => $faker->sentence(),
                'description' => $faker->paragraph(),
                'size' => $faker->randomFloat(2, 100, 1000),
                'ground_breaking' => $faker->date(),
                'region' => $faker->state(),
                'province' => $faker->state(),
                'municipality' => $faker->city(),
                'barangay' => $faker->streetName(),
                'address' => $faker->address(),
                'seller_id' => $seller->id,
                'owner_id' => $owner->id,
            ]);
        }
    }
}
