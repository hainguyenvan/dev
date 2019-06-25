<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\models\AccountsModel;

class AccountsController extends Controller
{
    public function create(Request $req) {
        $account = new AccountsModel();
        $account->email = $req->get('email');
        $account->name = $req->get('name');
        // $account->email = 'email';
        // $account->name = 'name';
        $account->timeCreated = now()->timestamp;
        $account->timeModified = now()->timestamp;

        $account->save();

        return 'Success';
    }
}
