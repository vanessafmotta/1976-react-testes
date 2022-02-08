import Transacao from "./Transacao";
import React from 'react';
import { render } from '@testing-library/react'

describe('Componente de transação do extrato', () => {
	it('O snapshot do component deve permanecer sempre o mesmo',
	 () => {
		const { container } = render(<Transacao
			data="08/09/2020" 
			tipo="saque" 
			valor="20.00"/>)
			//toMatchSnapshot igual o snapshot que ele gerou 
		expect(container.firstChild).toMatchSnapshot();
		})
});