import React from 'react';
import { render, screen } from "@testing-library/react"
import App, { calcularNovoSaldo } from './App';

describe('Componente principal', () => {
	//teste de um componente
	describe('Quando eu abro o app do banco', () => {
		it('o nome é exibido', () => {
			render(<App />);

			expect(screen.getByText('ByteBank')).toBeInTheDocument();
		})
		it('o saldo é exibido', () => {
			render(<App />);
			
			expect(screen.getByText('Saldo:')).toBeInTheDocument();
		})
		it('O botão de realizar operação é exibido', () => {
			render(<App />);

			expect(screen.getByText('Realizar operação')).toBeInTheDocument();
		})
	})
	// teste de uma funçao
	describe('Quando eu realizo uma transação', () =>{
		it('que é um saque, o valor vai diminuir', () =>{
			const valores = {
				transacao: 'saque',
				valor: 50
			}
			// o que eu tenho
			const novoSaldo = calcularNovoSaldo(valores, 150)
			//o que eu sei que vai ser a reposta 
			expect(novoSaldo).toBe(100);
		})
	})
})
