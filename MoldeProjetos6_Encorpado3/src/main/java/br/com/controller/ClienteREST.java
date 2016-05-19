package br.com.controller;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import br.com.modelo.Cliente;


@Path("/clientes")
public class ClienteREST implements Serializable {

	private static final long serialVersionUID = 1L;
	
	//Endereco:
	//http://localhost:8080/MoldeProjetos1/rest/clientes
	
	// This is the default @PATH
	@GET
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_JSON })
	public ArrayList<Cliente> getAllClientes() {
		
		System.out.println("Getting all clientes...");
		ArrayList<Cliente> clienteList = new ArrayList<Cliente>();
		
		Cliente c1=new Cliente();
		Cliente c2=new Cliente();
		c1.setNome("nome 1");
		c1.setDataNascimento(new Date());
		c1.setEmail("epa@hotmail.com");
		c2.setNome("nome 2");
		clienteList.add(c1);
		clienteList.add(c2);
		
		return clienteList;
	}
	


}
