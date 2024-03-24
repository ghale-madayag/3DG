<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $administrator = Role::create(['name' => 'administrator']);
        $staff = Role::create(['name' => 'staff']);
        $agent = Role::create(['name' => 'agent']);
        $client = Role::create(['name' => 'client']);
        $contact = Role::create(['name' => 'contact']);

        $permission = [
            ['name' => 'add land'],
            ['name' => 'view land'],
            ['name' => 'edit land'],
            ['name' => 'delete land'],
            ['name' => 'generate lot'],
            ['name' => 'generate phase'],
            ['name' => 'create user'],
            ['name' => 'edit user'],
            ['name' => 'delete user']
        ];

        foreach ($permission as $permission) {
            $assign = Permission::create($permission);
        }

        $administrator->givePermissionTo([
            'add land',
            'view land',
            'edit land',
            'delete land',
            'generate lot',
            'generate phase',
            'create user',
            'edit user',
            'delete user'
        ]);

        $staff->givePermissionTo([
            'add land',
            'view land',
            'edit land',
            'create user',
        ]);

        $agent->givePermissionTo([
            'view land',
            'create user',
        ]);



    }
}
