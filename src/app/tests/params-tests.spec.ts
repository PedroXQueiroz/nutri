import Expression from '../services/expression';
import FormulaDivision from '../services/basics/formula-division';
import ParamMetaData from '../dtos/param-metadata';
import Formula from '../services/formula';
import FormulaSoma from '../services/basics/formula-sum';

describe('Expressions and Formulas', () => {

    // it('should get all params of Formula', () => {
    //     const division:Formula = new FormulaDivision();

    //     const params = division.getParamsData();
    //     const paramsCount = params.length;
        
    //     expect(paramsCount).toBe(2);
    // })
    
    // it('should get all params of Expression', ()=>{
        
    //     let divisionExpression:Expression = new Expression(new FormulaDivision());
    //     let params:ParamMetaData[] = divisionExpression.getParamsData();

    //     expect(params.length).toBe(2);

    // })

    // it('should get unsatified params from expression', ()=>{
    //     let exp:Expression = new Expression(new FormulaDivision());

    //     let params:ParamMetaData[] = exp.unsatisfiedParams; 
        
    //     expect(params.length).toBe(2);
    // })

    // it('should get all unsatisfied params from expression', () => {
    //     let exp:Expression = new Expression(new FormulaDivision());

    //     let allParams:ParamMetaData[] = exp.allUnsatifiedParams;
        
    //     expect(allParams.length).toBe(2);
    // })

    it('should get all params of Expression with another expressions', ()=>{
        
        let requires:Map<string, Formula> = new Map<string, Formula>();
        requires.set('numerador', new FormulaSoma());

        let expression:Expression = new Expression(new FormulaDivision(), requires);
        let params:ParamMetaData[] = expression.allUnsatifiedParams;

        expect(params.length).toBe(3);

    })

})