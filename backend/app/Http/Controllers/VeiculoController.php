<?php

namespace App\Http\Controllers;

use App\Models\Veiculo;
use App\Http\Requests\StoreVeiculoRequest;
use App\Http\Requests\UpdateVeiculoRequest;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class VeiculoController extends Controller
{
    protected $veiculo;
    
    public function __construct(Veiculo $veiculo){
        $this->veiculo = $veiculo;
    }
    
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $veiculo = $this->veiculo->with('category')->get();

        return response()->json($veiculo, Response::HTTP_OK);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreVeiculoRequest $request): JsonResponse
    {
        $data = $request->validated();

        if ($request->hasFile('image')){#condicional que encaminha a imagem pras pastas
            $path = $request->file('image')->store('vehicles', 'public');
            $data['image'] = url('storage/' .$path);
        }

        $veiculo = $this->veiculo->create($data);#criando o veiculo
        $id = $veiculo->id; #pega o id do veiculo e busca a categoria dele
        $veiculo_categoria = $this->veiculo->with('category')->findOrFail($id);#cria uma variavel que recebe o veiculo e sua categoria

        return response()->json($veiculo_categoria, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     */
    public function show($id): JsonResponse
    {
        $veiculo = $this->veiculo->with('category')->findOrFail($id);

        return response()->json($veiculo, Response::HTTP_OK);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Veiculo $veiculo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVeiculoRequest $request, $id): JsonResponse
    {
        $veiculo = $this->veiculo->with('category')->findOrFail($id);

        $data = $request->validated();

        if ($request->hasFile('image')){
            try {
                $image_name = explode('vehicles/', $veiculo['image']);
                Storage::disk('public')->delete('vehicles/'.$image_name[1]);

            } catch(Throwable) {
            } finally {
                $path = $request->file('image')->store('vehicles', 'public');
                $data['image'] = url('storage/'.$path);
            }
        }

        $veiculo->update($data);

        return response()->json($veiculo, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $veiculo = $this->veiculo->findOrFail($id);

        $veiculo->delete();

        return response()->json(['message' => 'Veiculo deletado com sucesso!']);
    }
    
    public function buy(UpdateVeiculoRequest $request, $id): JsonResponse
    {

    $veiculo = $this->veiculo->with('category')->findOrFail($id);
    if ($veiculo->storage <= 0) {
        return response()->json([
            'error' => 'Estoque esgotado',
            'storage' => 0
        ], Response::HTTP_BAD_REQUEST);
    }
    $veiculo->storage -= 1;
    $veiculo->save();
    return response()->json($veiculo, Response::HTTP_OK);
    }
}

