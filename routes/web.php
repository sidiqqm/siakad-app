<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    if (auth()->check())
        return to_route('dashboard');
    else
        return to_route('login');
});

Route::get('/dashboard', function () {
    $user = auth()->user();

    return match (true) {
        $user->hasRole('Admin') => redirect()->intended(route('admin.dashboard')),
        $user->hasRole('Student') => redirect()->intended(route('student.dashboard')),
        $user->hasRole('Teacher') => redirect()->intended(route('teacher.dashboard')),
        $user->hasRole('Operator') => redirect()->intended(route('operator.dashboard')),
        default => redirect()->route('login')
            ->withErrors(['role' => 'Role tidak dikenali.']),
    };
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
require __DIR__ . '/operator.php';
require __DIR__ . '/teacher.php';
require __DIR__ . '/student.php';
