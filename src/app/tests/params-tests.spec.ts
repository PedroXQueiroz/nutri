import Expression from '../services/expression';
import FormulaDivision from '../services/basics/formula-division';
import ParamMetaData from '../dtos/param-metadata';
import Formula from '../services/formula';

describe('Expressions and Formulas', () => {

    it('should get all params of Formula', () => {
        const division:Formula = new FormulaDivision();

        const params = division.getParamsData();
        const paramsCount = params.length;
        
        expect(paramsCount).toBe(2);
    })
    
    it('should get all params of Expression', ()=>{
        
        let divisionExpression:Expression = new Expression(new FormulaDivision());
        let params:ParamMetaData[] = divisionExpression.getParamsData();

        expect(params.length).toBe(2);

    })

    it('should get all params of Expression with another expressions', ()=>{
        
        
        let innerExpresion:Expression = new Expression(new FormulaDivision());
        let expression:Expression = new Expression(innerExpresion);
        let params:ParamMetaData[] = expression.getParamsData();

        expect(params.length).toBe(2);

    })

})