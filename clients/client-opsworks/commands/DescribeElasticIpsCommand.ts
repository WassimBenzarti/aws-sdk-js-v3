import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeElasticIpsRequest, DescribeElasticIpsResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeElasticIpsCommand,
  serializeAws_json1_1DescribeElasticIpsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DescribeElasticIpsCommandInput = DescribeElasticIpsRequest;
export type DescribeElasticIpsCommandOutput = DescribeElasticIpsResult & __MetadataBearer;

export class DescribeElasticIpsCommand extends $Command<
  DescribeElasticIpsCommandInput,
  DescribeElasticIpsCommandOutput,
  OpsWorksClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeElasticIpsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeElasticIpsCommandInput, DescribeElasticIpsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName: "OpsWorksClient",
      commandName: "DescribeElasticIpsCommand",
      inputFilterSensitiveLog: DescribeElasticIpsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeElasticIpsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeElasticIpsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeElasticIpsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeElasticIpsCommandOutput> {
    return deserializeAws_json1_1DescribeElasticIpsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
