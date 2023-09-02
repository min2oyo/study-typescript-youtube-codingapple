const _primitive_types = () => {

  /** 개념 */

  // Type은 알아서 지정해주므로, 고인물은 type 안 씀
  const name: string = `kim`;
  const age: number = 50;
  const isMarried1: boolean = true;
  const isMarried2: null = null;
  const isMarried3: undefined = undefined;
  const members1: string[] = [`kim`, `park`];
  const members2: { membr1: string, member2: string; } = { membr1: `kim`, member2: `park` };

  /** light */
  name; age; isMarried1; isMarried2; isMarried3; members1; members2;

};

_primitive_types();