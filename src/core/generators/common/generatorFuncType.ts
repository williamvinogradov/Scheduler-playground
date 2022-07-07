type TGeneratorFunc<TDependency, TConfig, TResult> = (
  dependency: TDependency,
  config: TConfig,
) => TResult;

export default TGeneratorFunc;
