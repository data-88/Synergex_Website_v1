import Link from 'next/link'
import Accordion from '../../components/Accordion'

export const metadata = {
  title: 'Syntax Guide - Synergex',
  description: 'Complete Synergex v1.1 syntax guide with interactive examples and live editor.',
}

export default function SyntaxPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Synergex Syntax Guide
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master the universal language of systems. Learn every symbol, operator, and pattern 
            that makes Synergex the most powerful framework for modeling complexity.
          </p>
        </div>

        {/* Full Syntax Guide (v1.1) */}
        <article className="prose prose-invert max-w-none mb-16 sgx-syntax">
          
          <hr />

          <Accordion title="🧩 1. Core Components" defaultOpen>
          <p>Synergex is built from three foundational elements:</p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Element</th>
                  <th>Symbol</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>System</strong></td>
                  <td><code>⟦ ⟧</code></td>
                  <td>Encapsulates any entity, process, or structure</td>
                </tr>
                <tr>
                  <td><strong>Interaction</strong></td>
                  <td><code>→</code>, <code>⟷</code>, <code>∮</code>, …</td>
                  <td>Denotes flow, coupling, or feedback</td>
                </tr>
                <tr>
                  <td><strong>Semantic Kernel</strong></td>
                  <td><code>◈_X</code></td>
                  <td>Universal functional motif (invariant across domains)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>Together, they form a language of <strong>relationships, dynamics, and emergence</strong>.</p>
          </Accordion>

          <hr />

          <Accordion title="🏷️ 2. System Declaration">
          <p>All systems are enclosed in double square brackets.</p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Pattern</th>
                  <th>Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>⟦System Name⟧</code></td>
                  <td>Base system declaration</td>
                </tr>
                <tr>
                  <td><code>⟦System Name∞⟧</code></td>
                  <td>Open boundary (interacts with environment)</td>
                </tr>
                <tr>
                  <td><code>⟦Substrate:Function⟧</code></td>
                  <td>Optional annotation of substrate and function</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="overflow-x-auto mt-6">
            <table>
              <thead>
                <tr>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><code>⟦Climate System⟧</code></td></tr>
                <tr><td><code>⟦Neural Network∞⟧</code></td></tr>
                <tr><td><code>⟦Market:Regulation⟧</code></td></tr>
                <tr><td><code>⟦Mind:Self-Model⟧</code></td></tr>
              </tbody>
            </table>
          </div>
          </Accordion>

          <hr />

          <Accordion title="🔗 3. Interaction & Flow Operators">
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Name</th>
                  <th>Meaning</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><code>→</code></td><td>Directed Flow</td><td>Unidirectional influence</td><td><code>⟦Sun⟧ → ⟦Photosynthesis⟧</code></td></tr>
                <tr><td><code>⟷</code></td><td>Reciprocal Interaction</td><td>Mutual coupling</td><td><code>⟦Predator⟧ ⟷ ⟦Prey⟧</code></td></tr>
                <tr><td><code>⇄</code></td><td>Dynamic Equilibrium</td><td>Balanced bidirectional flow</td><td><code>⟦Supply⟧ ⇄ ⟦Demand⟧</code></td></tr>
                <tr><td><code>⇏</code></td><td>Blocked Flow</td><td>Inhibited or failed interaction</td><td><code>⟦Signal⟧ → ❌ → ⟦Response⟧</code></td></tr>
                <tr><td><code>⇝</code></td><td>Emergent Consequence</td><td>Indirect or non-linear outcome</td><td><code>⟦Policy⟧ ⇝ ⟦Unintended Effect⟧</code></td></tr>
                <tr><td><code>↣</code></td><td>Injective Transformation</td><td>One-to-one mapping</td><td><code>⟦Gene⟧ ↣ ⟦Protein⟧</code></td></tr>
                <tr><td><code>↠</code></td><td>Surjective Integration</td><td>Many-to-one convergence</td><td><code>⟦Sensors⟧ ↠ ⟦Decision Node⟧</code></td></tr>
                <tr><td><code>↮</code></td><td>Decoupling</td><td>Loss of interaction</td><td><code>⟦Economy⟧ ↮ ⟦Ecology⟧</code></td></tr>
                <tr><td><code>∿</code></td><td>Noise / Randomness</td><td>Stochastic distortion</td><td><code>⟦Signal⟧ ∿ → ⟦Receiver⟧</code></td></tr>
              </tbody>
            </table>
          </div>
          </Accordion>

          <hr />

          <Accordion title="🧱 4. System Composition & Structure">
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Name</th>
                  <th>Meaning</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><code>⊕</code></td><td>Functional Composition</td><td>Two systems combine into a new function</td><td><code>⟦Wheel⟧ ⊕ ⟦Axle⟧ → ⟦Cart⟧</code></td></tr>
                <tr><td><code>⊗</code></td><td>Emergent Synthesis</td><td>Interaction generates a qualitatively new system</td><td><code>⟦Mind⟧ ⊗ ⟦Tool⟧ → ⟦Extended Cognition⟧^E</code></td></tr>
                <tr><td><code>⊙</code></td><td>Core Integration</td><td>Central hub connecting subsystems</td><td><code>⟦Brain⟧ ← ⊙ → ⟦Senses⟧</code></td></tr>
                <tr><td><code>∪</code></td><td>System Union</td><td>Aggregation without integration</td><td><code>⟦Forest⟧ ∪ ⟦River⟧</code></td></tr>
                <tr><td><code>∩</code></td><td>System Overlap</td><td>Shared components or functions</td><td><code>⟦Economy⟧ ∩ ⟦Culture⟧</code></td></tr>
                <tr><td><code>∖</code></td><td>Subtractive Refinement</td><td>Removal to refine function</td><td><code>⟦Theory⟧ ∖ ⟦Assumption⟧</code></td></tr>
                <tr><td><code>≋</code></td><td>Meta-Isomorphism</td><td>Structural but not functional analogy</td><td><code>⟦Solar System⟧ ≋ ⟦Atom⟧</code></td></tr>
              </tbody>
            </table>
          </div>
          </Accordion>

          <hr />

          <Accordion title="⏳ 5. Dynamics & Change">
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Name</th>
                  <th>Meaning</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><code>∇</code></td><td>Adaptive Gradient</td><td>Rate of change, learning, evolution</td><td><code>∇⟦AI Model⟧ = training</code></td></tr>
                <tr><td><code>Δ</code></td><td>State Transition</td><td>Discrete change in system state</td><td><code>Δ(⟦Ice⟧ → ⟦Water⟧)</code></td></tr>
                <tr><td><code>∂</code></td><td>Partial Influence</td><td>Partial derivative of behavior</td><td><code>∂⟦Ecosystem⟧/∂⟦Temperature⟧</code></td></tr>
                <tr><td><code>∮</code></td><td>Feedback Loop</td><td>Closed-cycle regulation</td><td><code>∮(⟦Thermostat⟧ → ⟦Heater⟧ → ⟦Room⟧ → ⟦Thermostat⟧)</code></td></tr>
                <tr><td><code>⟳</code></td><td>Recursive Cycle</td><td>Repeating process with memory</td><td><code>⟳(⟦Innovation⟧ → ⟦Adoption⟧ → ⟦New Norm⟧ → ⟦Innovation⟧)</code></td></tr>
                <tr><td><code>↯</code></td><td>Phase Shift</td><td>Sudden qualitative change (tipping point)</td><td><code>⟦Climate⟧ ↯ ⟦New Regime⟧</code></td></tr>
                <tr><td><code>⥁</code></td><td>Hysteresis</td><td>Path-dependent state retention</td><td><code>⟦Economy⥁⟧ ≠ ⟦Economy⟧ after crisis</code></td></tr>
                <tr><td><code>↝</code></td><td>Tendency or Drift</td><td>Soft attraction toward a state</td><td><code>⟦Public Opinion↝⟧ → ⟦Policy Change⟧</code></td></tr>
              </tbody>
            </table>
          </div>
          </Accordion>

          <hr />

          <Accordion title="🌐 6. Semantic Kernels (◈) – Universal Functional Motifs">
          <p>Semantic Kernels are <strong>invariant functional patterns</strong> that recur across domains.</p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Syntax</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Kernel identifier</td>
                  <td><code>◈_KernelName</code></td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3>Core Kernels:</h3>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Kernel</th>
                  <th>Function</th>
                  <th>Example Domains</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><code>◈_Regulator</code></td><td>Maintains stability via feedback</td><td>Biology, engineering, policy</td></tr>
                <tr><td><code>◈_Amplifier</code></td><td>Increases signal or influence</td><td>Media, economics, immunology</td></tr>
                <tr><td><code>◈_Oscillator</code></td><td>Generates rhythmic behavior</td><td>Neuroscience, climate, markets</td></tr>
                <tr><td><code>◈_Replicator</code></td><td>Self-copies</td><td>Genetics, memes, algorithms</td></tr>
                <tr><td><code>◈_Filter</code></td><td>Selective passage</td><td>Blood-brain barrier, firewalls, peer review</td></tr>
                <tr><td><code>◈_Integrator</code></td><td>Combines inputs into output</td><td>Brain, fusion reactor, policy team</td></tr>
                <tr><td><code>◈_Resonator</code></td><td>Synchronizes frequencies</td><td>Fireflies, power grids, rituals</td></tr>
                <tr><td><code>◈_Boundary</code></td><td>Manages exchange</td><td>Cell membrane, borders, APIs</td></tr>
                <tr><td><code>◈_Selector</code></td><td>Drives adaptation via selection</td><td>Evolution, markets, science</td></tr>
                <tr><td><code>◈_Transducer</code></td><td>Converts energy/info forms</td><td>Microphone, neuron, photosynthesis</td></tr>
                <tr><td><code>◈_Catalyst</code></td><td>Accelerates change without being consumed</td><td>Chemistry, innovation, mediation</td></tr>
                <tr><td><code>◈_Mediator</code></td><td>Enables indirect interaction</td><td>Diplomacy, enzymes, middleware</td></tr>
                <tr><td><code>◈_Entropy</code></td><td>Drives disorder/dispersion</td><td>Thermodynamics, information theory</td></tr>
                <tr><td><code>◈_Homeostat</code></td><td>Maintains balance across shifts</td><td>Physiology, ecology, governance</td></tr>
              </tbody>
            </table>
          </div>
          </Accordion>

          <hr />

          <Accordion title="🧠 7. Cognitive & Epistemic Operators">
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Name</th>
                  <th>Meaning</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><code>?</code></td><td>Inquiry Node</td><td>Represents a question</td><td><code>⟦Climate Change?⟧</code></td></tr>
                <tr><td><code>!</code></td><td>Insight Trigger</td><td>Marks discovery</td><td><code>⟦Eureka!⟧ → ⟦Theory⟧</code></td></tr>
                <tr><td><code>⁇</code></td><td>Uncertainty Field</td><td>Zone of ambiguity</td><td><code>⟦Dark Matter⁇⟧</code></td></tr>
                <tr><td><code>⊧</code></td><td>Knowledge Entailment</td><td>One concept implies another</td><td><code>⟦Evolution⟧ ⊧ ⟦Adaptation⟧</code></td></tr>
                <tr><td><code>⊨</code></td><td>Model Validity</td><td>Model fits evidence</td><td><code>⟦Model⟧ ⊨ ⟦Data⟧</code></td></tr>
                <tr><td><code>≈</code></td><td>Approximate Equivalence</td><td>Similar but not identical</td><td><code>⟦Map≈⟧ ⟦Territory⟧</code></td></tr>
                <tr><td><code>≬</code></td><td>Cognitive Dissonance</td><td>Conflicting knowledge</td><td><code>⟦Belief⟧ ≬ ⟦Evidence⟧</code></td></tr>
                <tr><td><code>⇝→</code></td><td>Abductive Leap</td><td>Inference to best explanation</td><td><code>⟦Symptom⟧ ⇝→ ⟦Diagnosis⟧</code></td></tr>
                <tr><td><code>⟪ ⟫</code></td><td>Mental Model Encapsulator</td><td>Internal schema</td><td><code>⟪Climate Crisis⟫</code></td></tr>
                <tr><td><code>⊕̷</code></td><td>Cognitive Bias</td><td>Distorted integration</td><td><code>⟦Data⟧ ⊕̷ ⟦Belief⟧ → ⟦Misinterpretation⟧</code></td></tr>
              </tbody>
            </table>
          </div>
          </Accordion>

          <hr />

          <Accordion title="📐 8. Temporal, Scale & Abstraction Operators">
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Name</th>
                  <th>Meaning</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><code>𝕋</code></td><td>Temporal Axis</td><td>Time dimension</td><td><code>𝕋(⟦Ecosystem⟧)</code></td></tr>
                <tr><td><code>𝒮</code></td><td>Scale Level</td><td>Hierarchical level</td><td><code>𝒮₃(⟦Neuron⟧) → 𝒮₄(⟦Brain⟧)</code></td></tr>
                <tr><td><code>Λ₀, Λ₁, Λ₂…</code></td><td>Abstraction Layer</td><td>Micro/meso/macro nesting</td><td><code>Λ₀⟦Neuron⟧ → Λ₁⟦Brain⟧ → Λ₂⟦Culture⟧</code></td></tr>
                <tr><td><code>⇉</code></td><td>Rapid Transition</td><td>Fast dynamic shift</td><td><code>⟦Viral Spread⟧ ⇉</code></td></tr>
                <tr><td><code>⇝ slow</code></td><td>Gradual Emergence</td><td>Slow, cumulative change</td><td><code>⟦Cultural Shift⇝ slow⟧</code></td></tr>
                <tr><td><code>↻</code></td><td>Temporal Loop</td><td>Time-based recurrence</td><td><code>⟦Seasons⟧ ↻</code></td></tr>
                <tr><td><code>⊳</code></td><td>Precedes</td><td>Temporal ordering</td><td><code>⟦Cause⟧ ⊳ ⟦Effect⟧</code></td></tr>
                <tr><td><code>⊲</code></td><td>Follows</td><td>Reverse temporal</td><td><code>⟦Effect⊲⟧ after ⟦Intervention⟧</code></td></tr>
                <tr><td><code>⨀</code></td><td>Simultaneity</td><td>Concurrent events</td><td><code>⟦Earthquake⨀⟧ and ⟦Tsunami⨀⟧</code></td></tr>
              </tbody>
            </table>
          </div>
          </Accordion>

          <hr />

          <Accordion title="⚖️ 9. Value & Ethics Operators">
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Name</th>
                  <th>Meaning</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><code>⚖</code></td><td>Ethical Balance</td><td>Weighs trade-offs</td><td><code>⟦Privacy⚖⟧ vs ⟦Security⟧</code></td></tr>
                <tr><td><code>❤</code></td><td>Human-Centric Value</td><td>Empathy, well-being</td><td><code>⟦Policy⟧ ❤ ⟶ ⟦Equity⟧</code></td></tr>
                <tr><td><code>⚠</code></td><td>Risk Indicator</td><td>Potential harm</td><td><code>⟦AI System⚠⟧ = bias risk</code></td></tr>
                <tr><td><code>✅</code></td><td>Sustainable Alignment</td><td>Ethically sound</td><td><code>⟦Technology✅⟧</code></td></tr>
                <tr><td><code>❌</code></td><td>Systemic Harm</td><td>Irreversible damage</td><td><code>⟦Exploitation❌⟧</code></td></tr>
                <tr><td><code>∞+</code></td><td>Infinite Game</td><td>Long-term, cooperative survival</td><td><code>⟦Civilization∞+⟧</code></td></tr>
                <tr><td><code>◿</code></td><td>Care Network</td><td>Mutual support structure</td><td><code>⟦Community◿⟧ → ⟦Resilience⟧</code></td></tr>
              </tbody>
            </table>
          </div>
          </Accordion>

          <hr />

          <Accordion title="🛠️ 10. Meta-Linguistic & Operational Operators">
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Name</th>
                  <th>Meaning</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><code>⟦⟧^T</code></td><td>Translated System</td><td>Cross-domain mapping</td><td><code>⟦Immune System⟧^T → ⟦Cybersecurity⟧</code></td></tr>
                <tr><td><code>⟦⟧^S</code></td><td>Simulated Instance</td><td>Computational model</td><td><code>⟦City⟧^S → Agent-Based Model</code></td></tr>
                <tr><td><code>⟦⟧^C</code></td><td>Co-Created System</td><td>Emergent through collaboration</td><td><code>⟦Knowledge Commons⟧^C</code></td></tr>
                <tr><td><code>⟦⟧^E</code></td><td>Emergent Identity</td><td>Irreducible system</td><td><code>⟦Consciousness⟧^E</code></td></tr>
                <tr><td><code>⟪⟫ → ⟦⟧</code></td><td>Mental to Systemic</td><td>Internal model externalized</td><td><code>⟪Vision⟫ → ⟦Startup⟧</code></td></tr>
                <tr><td><code>Σ(⟦⟧)</code></td><td>Systemic Summation</td><td>Totality of a system class</td><td><code>Σ(⟦Languages⟧) = Human Expression</code></td></tr>
                <tr><td><code>ℙ(⟦⟧)</code></td><td>Probability Measure</td><td>Likelihood of state</td><td><code>ℙ(⟦Earthquake⟧) = 0.02/yr</code></td></tr>
                <tr><td><code>evaluate(⟦⟧)</code></td><td>Operational Evaluation</td><td>Returns system state vector</td><td><code>evaluate(⟦Market⟧)</code></td></tr>
                <tr><td><code>simulate(∮(...))</code></td><td>Dynamic Simulation</td><td>Produces time-trace</td><td><code>simulate(∮⟦Thermostat⟧)</code></td></tr>
              </tbody>
            </table>
          </div>
          </Accordion>

          <hr />

          <Accordion title="🧮 12. Logical Operators" defaultOpen>
          <p>Logical operators enable <strong>compound conditions</strong>, <strong>ethical alignment checks</strong>, and <strong>formal validation</strong> within system models.</p>
          
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Name</th>
                  <th>Meaning</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>∧</code></td>
                  <td>Logical AND</td>
                  <td>Both conditions must be true</td>
                  <td><code>⟦Safe⟧ ∧ ⟦Fair⟧ → ⟦Aligned AI⟧</code></td>
                </tr>
                <tr>
                  <td><code>∨</code></td>
                  <td>Logical OR</td>
                  <td>At least one condition is true</td>
                  <td><code>⟦Threat⟧ = ⟦Cyber⟧ ∨ ⟦Physical⟧</code></td>
                </tr>
                <tr>
                  <td><code>¬</code></td>
                  <td>Negation (NOT)</td>
                  <td>Condition is false</td>
                  <td><code>¬(⟦Harmful⟧) → ⟦Permit⟧</code></td>
                </tr>
                <tr>
                  <td><code>⊻</code></td>
                  <td>Exclusive OR (XOR)</td>
                  <td>Exactly one condition is true</td>
                  <td><code>⟦Centralized⟧ ⊻ ⟦Decentralized⟧ → ⟦Governance Choice⟧</code></td>
                </tr>
              </tbody>
            </table>
          </div>

          </Accordion>

          <hr />

          <Accordion title="📜 11. Grammar Rules (Synergex Syntax Laws)">
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Rule</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>Expression bounds</td><td>Begin and end with a system or kernel</td></tr>
                <tr><td>2</td><td>Closed feedback</td><td>∮ loops must close: <code>∮( ... → ... → ... )</code></td></tr>
                <tr><td>3</td><td>Emergence irreducibility</td><td><code>⊗</code> requires irreducibility</td></tr>
                <tr><td>4</td><td>Isomorphism justification</td><td><code>≣</code> / <code>≋</code> justified by kernels or structure</td></tr>
                <tr><td>5</td><td>Recursive bounds</td><td>Recursive structures must be bounded</td></tr>
                <tr><td>6</td><td>Open boundary interaction</td><td><code>∞</code> requires at least one external interaction</td></tr>
                <tr><td>7</td><td>Probabilistic context</td><td><code>ℙ</code>, <code>∿</code> must specify context</td></tr>
                <tr><td>8</td><td>Layer consistency</td><td><code>Λ</code> abstraction layers must be hierarchical</td></tr>
                <tr><td>9</td><td>Logical well-formedness</td><td>Expressions with <code>∧</code>, <code>∨</code>, <code>¬</code>, <code>⊻</code> must be resolvable and contextually valid</td></tr>
              </tbody>
            </table>
          </div>
          </Accordion>

          <hr />

        </article>

        {/* Next Steps */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Ready to Build Your First Model?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/examples" className="synergex-button">
              View Examples
            </Link>
            <Link href="/learn" className="synergex-button-secondary">
              Start Learning
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}