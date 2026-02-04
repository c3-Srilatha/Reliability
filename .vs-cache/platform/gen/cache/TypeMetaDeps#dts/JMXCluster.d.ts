// TypeScript definitions for the C3 type JMXCluster

/**
 * This type is used to get/set MBean attributes across the C3 Cluster.
 *
 * @remarks this represents a value passed to a method that expects an instance of JMXCluster
 */
declare interface IJMXCluster {
}

/**
 * This type is used to get/set MBean attributes across the C3 Cluster.
 *
 * @remarks this represents a made instance of JMXCluster
 */
declare class JMXCluster {

  /**
   * Get an MBean attribute across the C3 Cluster.
   *
   * @param nameSpec
   *          MBean name specification.
   * @param attribute
   *          MBean attribute name.
   *
   * @return the Arry of MBeanAttribute objects (one per node)
   */
  static getMBeanAttribute(nameSpec?: string | null, attribute?: string | null): C3.Array<MBeanAttribute | null>;

  /**
   * Set an MBean attribute value across the C3 Cluster.
   *
   * @param nameSpec
   *          MBean name specification.
   * @param attribute
   *          MBean attribute name.
   * @param value
   *          The new value for the attribute, it will be coerced from string
   *          the the actual primitive type
   *
   * @return the Arry of modified MBeanAttribute objects (one per node)
   */
  static setMBeanAttribute(nameSpec?: string | null, attribute?: string | null, value?: string | null): C3.Array<MBeanAttribute | null>;

  /**
   * Find a given MBean across the C3 Cluster. This function is handy for
   * finding the attribute names of a given MBean.
   *
   * @param nameSpec
   *          MBean name specification.
   *
   * @return An Arry of MBeans, one per node in the C3 Cluster.
   */
  static find(nameSpec?: string | null): C3.Array<MBean | null>;
}

