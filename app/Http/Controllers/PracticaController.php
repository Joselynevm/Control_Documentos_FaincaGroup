<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class PracticaController extends Controller
{

    public function index()
    {
        $mensaje='hola mundo';
        
        return view('Practica.Index',compact('mensaje'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }


    public function store(Request $request)
    {
       
   try{
            DB::beginTransaction();
            
            DB::table('registroFianca')->insert(['Usuario' => $request->usuario,
            'Contrasena' => $request->contraseña ]);

            DB::commit();
            return response()->json(["mensaje"=>true, "texto"=>"Se creo correctamente"]);
    }catch(\Exception $e){
            DB::rollback();
            return response()->json(["mensaje"=>false, "texto"=>$e->getMessage()]);
    }

        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
