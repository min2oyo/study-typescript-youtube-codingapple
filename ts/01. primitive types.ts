const _primitive_types = () => {

  /** 개념 */

  // Type은 알아서 지정되므로, 고인물은 type 안 씀
  const name: string = `kim`;
  const age: number = 50;
  const isMarried: boolean = true;
  const home: null = null;
  const money: undefined = undefined;
  const furniture: string[] = [`kim`, `park`];
  const members: { membr1: string, member2: string; } = { membr1: `kim`, member2: `park` };

  /** light */
  name; age; isMarried; home; money; furniture; members;

};

_primitive_types();