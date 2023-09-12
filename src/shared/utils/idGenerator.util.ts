class IdGeneratorUtil {
  private id = 0;

  getId(): string {
    this.id = this.id + 1;
    return `uid-${this.id}`;
  }
}

export default new IdGeneratorUtil();