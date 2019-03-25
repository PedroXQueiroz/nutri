import Expression from './expression';

export default abstract class ExpressionFactory{

    public abstract buildExpression():Expression;

}