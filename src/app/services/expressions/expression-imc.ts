import ExpressionFactory from '../expression-factory';
import Expression from '../expression';
import FormulaDivision from '../basics/formula-division';
import FormulaMultiplication from '../basics/formula-multiplication';
import Formula from '../formula';

export default class ExpressionImc extends ExpressionFactory {
    
    public buildExpression(): Expression {
        
        let requirements:Map<string, Expression|Formula> = new Map<string, Expression|Formula>();
        requirements['primeiro'] = new FormulaMultiplication();
        
        return new Expression(new FormulaDivision(),
            requirements
        );

    }
}