import metrixaLogo from "../assets/metrixa-logo.png";
interface ResultProps {
  image: string | null;
  onBack: () => void;
  onScanAgain: () => void;
  onHome: () => void;
}

function Result({
  image,
  onBack,
  onScanAgain,
  onHome,
}: ResultProps)  {
  return (
    <div className="result-page">

      {/* TOP BAR */}

      <div className="result-topbar">

  <button
    className="back-button"
    onClick={onBack}
  >
    ← Back
  </button>

  <button
    className="brand-button"
    onClick={onHome}
    aria-label="Go to Home"
  >
    <img
      src={metrixaLogo}
      alt="METRIXA"
      className="brand-logo"
    />
  </button>

  <button
    className="secondary-button"
    onClick={onScanAgain}
  >
    Scan Another
  </button>

</div>


      {/* PAGE HEADING */}

      <div className="result-title">

        <p className="eyebrow">
          ANALYSIS COMPLETE
        </p>

        <h1>
          Here's what we found.
        </h1>

        <p>
          We've analyzed the product image and extracted
          the available information.
        </p>

      </div>


      {/* PRODUCT OVERVIEW */}

      <section className="product-overview">

        <div className="result-image-container">

          {image ? (
            <img
              src={image}
              alt="Scanned product"
              className="result-product-image"
            />
          ) : (
            <div className="no-image">
              No image available
            </div>
          )}

        </div>


        <div className="overview-info">

          <p className="small-label">
            PRODUCT
          </p>

          <h2>
            Sample Product
          </h2>

          <p className="brand">
            Sample Brand
          </p>


          {/* STATUS */}

          <div className="overall-status">

            <div className="status-icon">
              ✓
            </div>

            <div>
              <p className="status-label">
                ANALYSIS STATUS
              </p>

              <h3>
                Successfully Analyzed
              </h3>

              <p>
                Product information was successfully
                extracted from the image.
              </p>
            </div>

          </div>


          {/* TAGS */}

          <div className="product-tags">

            <span>
              Food Product
            </span>

            <span>
              Information Found
            </span>

          </div>

        </div>

      </section>


      {/* INFORMATION */}

      <section className="result-section">

        <div className="result-section-heading">

          <p className="eyebrow">
            PRODUCT INFORMATION
          </p>

          <h2>
            What's inside?
          </h2>

        </div>


        <div className="result-cards">

          {/* INGREDIENTS */}

          <div className="result-card large-card">

            <div className="card-icon">
              📋
            </div>

            <div>

              <h3>
                Ingredients
              </h3>

              <p className="card-description">
                Ingredients detected from the product label.
              </p>

              <div className="ingredient-list">

                <span>
                  Ingredient 1
                </span>

                <span>
                  Ingredient 2
                </span>

                <span>
                  Ingredient 3
                </span>

                <span>
                  Ingredient 4
                </span>

              </div>

            </div>

          </div>


          {/* NUTRITION */}

          <div className="result-card">

            <div className="card-icon">
              🥗
            </div>

            <h3>
              Nutrition
            </h3>

            <p className="card-description">
              Nutritional information detected from
              the product.
            </p>

            <div className="nutrition-list">

              <div>
                <span>Calories</span>
                <strong>--</strong>
              </div>

              <div>
                <span>Protein</span>
                <strong>--</strong>
              </div>

              <div>
                <span>Carbohydrates</span>
                <strong>--</strong>
              </div>

              <div>
                <span>Fat</span>
                <strong>--</strong>
              </div>

            </div>

          </div>


          {/* DETAILS */}

          <div className="result-card">

            <div className="card-icon">
              ℹ️
            </div>

            <h3>
              Product Details
            </h3>

            <p className="card-description">
              Additional information extracted from
              the product packaging.
            </p>

            <div className="details-list">

              <div>
                <span>Category</span>
                <strong>Food</strong>
              </div>

              <div>
                <span>Brand</span>
                <strong>Sample Brand</strong>
              </div>

              <div>
                <span>Origin</span>
                <strong>India</strong>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* SMART INSIGHTS */}

      <section className="result-section">

        <div className="result-section-heading">

          <p className="eyebrow">
            SMART INSIGHTS
          </p>

          <h2>
            Things worth knowing.
          </h2>

        </div>


        <div className="insights">

          <div className="insight-card positive">

            <div className="insight-symbol">
              ✓
            </div>

            <div>

              <h3>
                Information detected
              </h3>

              <p>
                The product label contains readable
                information that can be analyzed.
              </p>

            </div>

          </div>


          <div className="insight-card warning">

            <div className="insight-symbol">
              !
            </div>

            <div>

              <h3>
                Review the ingredients
              </h3>

              <p>
                Always check the complete ingredient
                list and product label before making
                a decision.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* BOTTOM ACTION */}

      <div className="result-bottom">

        <button
          className="scan-button"
          onClick={onScanAgain}
        >
          📷 Scan Another Item
        </button>

      </div>

    </div>
  );
}

export default Result;